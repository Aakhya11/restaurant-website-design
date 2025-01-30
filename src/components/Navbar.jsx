function NavBar() {
  return (
    <nav className="container flex justify-between py-4 text-lg font-playwrite">
      <div className="">Oken</div>
      <div className="flex gap-4">
        <a href="#">About</a>
        <a href="#">Reservation</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default NavBar;
