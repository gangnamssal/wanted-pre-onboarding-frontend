function Password({
  setPassword,
  enter,
}: {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  enter: () => void;
}) {
  const getPasswordInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPassword(() => inputValue);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") enter();
  };

  return (
    <>
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        data-testid="password-input"
        id="password"
        onChange={getPasswordInputValue}
        onKeyUp={onEnter}
      />
    </>
  );
}

export default Password;
