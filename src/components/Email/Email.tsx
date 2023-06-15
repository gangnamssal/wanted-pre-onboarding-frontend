function Email({
  setEmail,
}: {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}) {
  const getEmailInputValue = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(() => inputValue);
  };

  return (
    <>
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        data-testid="email-input"
        id="email"
        onBlur={getEmailInputValue}
      />
    </>
  );
}

export default Email;
