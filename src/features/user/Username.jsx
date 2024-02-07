import { useSelector } from 'react-redux';

function Username() {
  const { username } = useSelector((state) => state.user);

  if (!username) return null;

  return <h1 className="hidden text-sm font-semibold md:block ">{username}</h1>;
}

export default Username;
