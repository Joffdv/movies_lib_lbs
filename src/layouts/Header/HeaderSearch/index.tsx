import Router from 'next/router';
import React from 'react';
import * as S from './styles';
import { ImSearch } from 'react-icons/im';
import { IoClose } from 'react-icons/io5';

interface Props {
  mobile: boolean;
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderSearch = ({ mobile, setMobile }: Props) => {
  const [clearBtn, setClearBtn] = React.useState(true);
  const [inputValue, setInputValue] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFocusOnInput = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  const handleClearInput = () => {
    handleFocusOnInput();
    setInputValue('');
  };

  const handleBlur = () => {
    setTimeout(() => {
      setClearBtn(false);
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFocusOnInput();

    if (inputValue.length === 0) return;
    if (mobile) setMobile(false);

    Router.push(`/search?q=${inputValue}`);
    setInputValue('');
  };

  React.useEffect(() => {
    if (inputValue.length === 0) {
      setClearBtn(false);
      return;
    }

    setClearBtn(true);
  }, [inputValue.length]);

  return (
    <S.HeaderSearchContainer>
      <S.HeaderSearchWrapper onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Busque por um filme"
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
          onBlur={handleBlur}
          onFocus={() => inputValue.length > 0 && setClearBtn(true)}
          onMouseOver={() => inputValue.length > 0 && setClearBtn(true)}
        />
        <button type="submit">
          <i>
            <ImSearch />
          </i>
        </button>
      </S.HeaderSearchWrapper>
      {clearBtn && (
        <S.ClearInputButton onClick={handleClearInput}>
          <i>
            <IoClose />
          </i>
        </S.ClearInputButton>
      )}
    </S.HeaderSearchContainer>
  );
};

export default HeaderSearch;
