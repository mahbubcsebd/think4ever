export default function GradientText({ children, className = '' }) {
  return (
    <span className={`text-gradient ${className}`}>
      {children}
    </span>
  );
}
