import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/contactsSlice";
import { selectNameFilter } from "../../redux/filter/selectors";
import { useEffect } from "react";
import { fetchContactsThunk } from "../../redux/contacts/contactsOps";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter) || "";

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const filterData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

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
