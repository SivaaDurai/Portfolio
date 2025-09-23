import emailjs from 'emailjs-com';
function Header() {
  function sendHireMeEmail(e) {
    e.preventDefault();

    emailjs.send(
      'your_service_id',     // Replace with your EmailJS service ID
      'your_template_id',    // Replace with your EmailJS template ID
      {
        from_name: 'Siva Sankari P',
        to_name: 'Client',
        message: 'Thank you for hiring me!',
      },
      'your_public_key'      // Replace with your EmailJS public key
    )
    .then(() => {
      alert('Hire message sent successfully!');
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send email.');
    });
  }

  return (
    <div className="intro-buttons">
      <button className="btn common-btn" onClick={sendHireMeEmail}>
        Hire Me
      </button>

      <button className="btn ghost-btn">
        <a
          href="/siva-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Get Resume
        </a>
      </button>
    </div>
  );
}

export default Header;
