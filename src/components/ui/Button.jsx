function Button({ variant = 'primary', children, onClick, className = '' }) {
  const baseStyles = 'rounded-full px-5 py-2 text-sm font-medium transition-colors';
  const variants = {
    primary: 'bg-zinc-50 text-zinc-500 hover:bg-zinc-200',
    secondary: 'border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900',
    small: 'border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-zinc-50 hover:border-zinc-500 hover:bg-zinc-800'
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;