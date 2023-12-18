import { useState } from "react";

function AddLocationView() {
  const [formInfo, setFormInfo] = useState({
    city: "",
    country: "",
    dateFrom: "",
    dateTo: "",
    description: "",
  });

  // const handleChange = (event) => {
  //   setFormData(event.target.value);
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInfo((initialState) => ({
      ...initialState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInfo);
  };

  return (
    <>
      <div className="heroImage">
        <div className="heroGradient">
          <div className="heroDetail"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formInfo.city}
            placeholder="city"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formInfo.country}
            placeholder="country"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          from:
          <input
            type="date"
            name="dateFrom"
            value={formInfo.dateFrom}
            placeholder="date"
            onChange={handleChange}
          />
        </label>

        <label>
          to:
          <input
            type="date"
            name="dateTo"
            value={formInfo.dateTo}
            placeholder="date"
            onChange={handleChange}
          />
        </label>

        <fieldset>
          <legend>Descripition/Places to visit</legend>
          <label>
            <textarea
              name="description"
              cols="30"
              rows="10"
              value={formInfo.description}
              onChange={handleChange}
            ></textarea>
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </fieldset>

        {/* <p>
          {formData.city} {" - " + formData.country}
        </p> */}
      </form>
    </>
  );
}

export default AddLocationView;
