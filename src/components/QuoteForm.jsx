import { useState } from "react";

const initialState = {
  name: "",
  company: "",
  bagType: "",
  quantity: "",
  message: ""
};

const QuoteForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.company.trim()) nextErrors.company = "Company is required.";
    if (!formData.bagType) nextErrors.bagType = "Please select a bag type.";
    if (!formData.quantity.trim()) nextErrors.quantity = "Quantity is required.";
    if (!formData.message.trim()) nextErrors.message = "Please add a short message.";
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-forest-500"
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-forest-500"
            placeholder="Company or brand"
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-500">{errors.company}</p>
          )}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="bagType">
            Bag Type
          </label>
          <select
            id="bagType"
            name="bagType"
            value={formData.bagType}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-forest-500"
          >
            <option value="">Select bag type</option>
            <option value="shopping">Shopping & Carry Bags</option>
            <option value="grocery">Grocery & Supermarket Bags</option>
            <option value="garment">Garment & D-Cut Bags</option>
            <option value="garbage">Garbage & Bio-Medical Bags</option>
            <option value="films">Food & Packaging Films</option>
            <option value="roll-on">Compostable Roll-on Bags</option>
          </select>
          {errors.bagType && (
            <p className="mt-1 text-xs text-red-500">{errors.bagType}</p>
          )}
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="quantity">
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-forest-500"
            placeholder="Estimated monthly volume"
          />
          {errors.quantity && (
            <p className="mt-1 text-xs text-red-500">{errors.quantity}</p>
          )}
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-forest-500"
          placeholder="Tell us about your packaging requirements"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-forest-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-forest-700"
      >
        Submit Request
      </button>
      {submitted && (
        <p className="rounded-xl bg-forest-50 px-4 py-3 text-sm text-forest-700">
          Thanks! Our team will reach out with a tailored quote within 24 hours.
        </p>
      )}
    </form>
  );
};

export default QuoteForm;
