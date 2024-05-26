import { Link } from "react-router-dom";
import { BiSolidEditAlt } from "react-icons/bi";
import TitleCard from "../../../../components/Cards/TitleCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import TopSideButtons from "./TopSideButtons";

function UserManagePanel() {
  const { users } = useSelector((state) => state.admin);
  const [userData, setUserData] = useState(users);

  const removeFilter = () => {
    setUserData(users);
  };

  // Filter according to bio

  const applyFilter = (params) => {
    let filteredUserData = users.filter((t) => {
      return t.bio === params;
    });
    setUserData(filteredUserData);
  };

  // Search according to name && username
  const applySearch = (value) => {
    let filteredUserData = users.filter((t) => {
      return (
        t.username.toLowerCase().includes(value.toLowerCase()) ||
        t.name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setUserData(filteredUserData);
  };

  const editUser = (i) => {
    
  }

  return (
    <>
      <TitleCard
        title="User Manage Panel "
        topMargin="mt-2"
        TopSideButtons={
          <TopSideButtons
            users={users}
            applySearch={applySearch}
            applyFilter={applyFilter}
            removeFilter={removeFilter}
          />
        }
      >
        {/* Team Member list in table format loaded constant */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th>No</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Username</th>
                <th>Bio</th>
                <th>Role</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>{k + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                          <img src={l.avatar} alt="Avatar" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold">{l.name}</div>
                      </div>
                    </td>
                    <td>{l.username}</td>
                    <td>{l.bio}</td>
                    <td>{l.role}</td>
                    <td>
                      <div className="flex justify-center">
                        <Link to={`/admin/user/edit/${l._id}`}>
                          <button
                            type="button"
                            className="flex px-4 py-2 bg-slate-500 hover:bg-slate-600 dark:hover:bg-slate-400 text-[15px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                          >
                            <BiSolidEditAlt className="text-[21px] mt-[2px] mr-[3px]" />
                            <div className="mt-[1px]">Edit</div>
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default UserManagePanel;
