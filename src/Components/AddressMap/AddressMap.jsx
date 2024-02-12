
const AddressMap = () => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        title="Google Map"
        className="embed-responsive-item"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14663.772822556375!2d91.12511804999998!3d23.2451537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1707658024712!5m2!1sen!2sbd"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default AddressMap;
