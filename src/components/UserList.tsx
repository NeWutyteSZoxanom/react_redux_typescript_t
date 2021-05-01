import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { fetchUsers } from '../store/actionCreators/user';

const UserList: React.FC = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();
  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) {
    return <div>idet zagruzka</div>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
