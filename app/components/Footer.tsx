export default function Footer() {
  return (
    <div>
      <footer className="flex items-center justify-center p-4">
        <p className="text-white text-xl">
          Copyright &copy; {new Date().getFullYear()}{' '}
          <a
            href="http://www.linkedin.com/in/juanmanuelalvarezb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juan Manuel Alvarez
          </a>
        </p>
      </footer>
    </div>
  );
}
