const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <footer id='footer'>
      <div>
        <p>Fred's App &copy; {footerYear}, All Rights Reserved</p>
      </div>
    </footer>
  )
}
export default Footer
