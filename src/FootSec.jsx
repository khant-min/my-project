const FootSec = ({ setOpenNews }) => {
  return (
    <div className="Footer bg-slate-200 hidden lg:flex gap-20 ">
      <div>
        <h1 className="H uppercase font-bold">www.cambounlock.com</h1>
        <a href="#" className="flex gap-[2rem] p-4">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-solid fa-wifi"></i>
        </a>
      </div>
      <div>
        <h2 className="H">Useful Links</h2>
        <a href="#">Contact Us</a>
      </div>
      <div>
        <h2 className="H">Subscribe</h2>
        <p>Don't miss our updates! Get Subscribe now!</p>
        <button
          className="px-4 py-3 bg-slate-300 rounded-md"
          onClick={() => setOpenNews(true)}
        >
          Newsletter
        </button>
      </div>
      <div>
        <h2 className="H">Contact With Us</h2>
        <p>
          <i className="fa-sharp fa-solid fa-phone"></i>WhatsApp : +85516755538
        </p>
        <p>
          <i className="fa-regular fa-envelope"></i>support@cambounlock.com
        </p>
      </div>
    </div>
  );
};

export default FootSec;
