import s from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "./redux/contacts/selectors";

const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Something went wrong!</h2>}
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};

export default App;
