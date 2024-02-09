import { FaPerson } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css";
export const Contact = ({ dataContact: {id, name, number},  deleteContact }) => {
  return (
    <>
      <li className={css.liststyle}>
        <div className={css.information}>
          <div className={css.name}>
            <FaPerson />
            <p>{name}</p>
          </div>
          <div className={css.name}>
            <FaPhoneAlt />
            <p>{number}</p>
          </div>
        </div>
        <button className={css.btn} onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    </>
  );
};
