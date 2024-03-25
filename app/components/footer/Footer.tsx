export default function Footer() {
  return (
    <div className="min-h-screen">
      <footer className="flex items-center justify-center p-4 ">
        <p className="text-yellow-400 text-xl">
          Copyright &copy; {new Date().getFullYear()}{' '}
          <a
            href="http://www.linkedin.com/in/juanmanuelalvarezb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400"
          >
            Juan Manuel Alvarez
          </a>
        </p>
      </footer>
    </div>
  );
}
