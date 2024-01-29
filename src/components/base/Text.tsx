const Text = ({ children, size, mode, className }) => {
  return (
    <p
      className={`text-${size} ${
        mode === 'error'
          ? 'text-red-500'
          : mode === 'success'
            ? 'text-green-500'
            : ' text-black dark:text-white'
      } ${className}`}>
      {children}
    </p>
  );
};

export default Text;
