import Container from "./Container";

export default function Footer() {
  return (
    <div className="md:pt-16 py-7 bg-cyan-500">
      <Container>
        <small className="text-white block text-center pt-8 border-t border-gray-100">
          © Copyright 2023. Made by <a href="https://www.fiverr.com/kazimasudur" target="_blank" className="underline [&.underline]:after:h-[0px]">Kazi Masudur Rahman</a>
        </small>
      </Container>
    </div>
  );
}
