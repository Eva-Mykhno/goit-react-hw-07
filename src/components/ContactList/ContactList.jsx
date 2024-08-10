import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const filterData = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {filterData.map((item) => (
        <li key={item.id}>
          <Contact
            name={item.name}
            number={item.number}
            id={item.id}
            onDelete={() => dispatch(deleteContact(item.id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
