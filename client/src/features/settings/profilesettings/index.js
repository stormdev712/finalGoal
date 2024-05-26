import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";
import InputText from "../../../components/Input/InputText";
import TextAreaInput from "../../../components/Input/TextAreaInput";
import ToogleInput from "../../../components/Input/ToogleInput";
import Input from "../../../components/Input/Input";
import SelectBoxSmall from "../../../components/Input/SelectBoxSmall";

function ProfileSettings() {
  // const [profileInfo, setProfileInfo] = useState({
  // });
  const dispatch = useDispatch();
  const [tag, setTag] = useState([]);

  const addTags = (e) => {
    if (e.key === "Enter") {
      setTag([...tag, e.target.value]);
      e.target.value = "";
    }
  };

  const deleteTags = (index) => {
    tag.splice(index, 1);
    setTag([...tag]);
  };

  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
  };

  const changeAvatar = (e) => {};

  const updateFormValue = ({ updateType, value }) => {
    console.log(updateType);
  };

  return (
    <>
      <TitleCard className="" title="Profile Settings" topMargin="mt-5">
        <div>
          <div className="flex gap-20">
            <div>
              <div className="mt-10 rounded-full overflow-hidden h-60 w-60 ml-20 hover: cursor-pointer">
                <img src="./assets/avatar/avatar-17.jpg" />
                <input
                  type="file"
                  className=" top-36 z-10 absolute opacity-0 overflow-hidden h-60 w-120 ml-120 hover:scale-110 transition-shadow cursor-pointer"
                  onChange={changeAvatar()}
                />
              </div>
              <div className="mt-16 p-14 ">
                <button
                  className="btn btn-primary float-right"
                  onClick={() => updateProfile()}
                >
                  ChangeAvatar
                </button>
              </div>
            </div>

            <div className="w-px bg-white h-[50vh]"></div>

            <div className="w-[70%] grid grid-cols-1 md:grid-cols-1 gap-10 mt-10 items-center ">
              <InputText
                labelTitle="Username"
                defaultValue="alex@dashwind.com"
                updateFormValue={updateFormValue}
              />
              <InputText
                labelTitle="Name"
                defaultValue="Alex"
                updateFormValue={updateFormValue}
              />
              <div className=" flex gap-48 items-center">
                <label className="">Bio</label>
                <SelectBoxSmall
                  options={["React", "frontend", "Backend", "Laravel", "XD"]}
                />
              </div>
              {/* <InputText
                labelTitle="Bio"
                defaultValue=""
                updateFormValue={updateFormValue}
              /> */}
              <div className=" flex gap-40 items-center">
                <label className="">Category</label>
                <SelectBoxSmall options={["dsfdsfsdfsfs"]} />
                <div className="mt-0">
            <button
              className="btn btn-primary float-right"
              onClick={() => updateProfile()}
            >
              Add
            </button>
          </div>
                <div
                  className={`form-control w-4/5 m-2 flex sm:flex-row flex-col input border-2`}
                >
                  {tag.length > 0 &&
                    tag.map((value, index) => (
                      <div
                        key={index}
                        className="flex sm:flex-row flex-col items-center m-1 w-max border-2 mr-2"
                      >
                        <div className=" text-[15px] mr-1">{value}</div>
                        <button
                          className="border-1 text-[15px]"
                          onClick={() => deleteTags(index)}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                </div>
                {/* <select
                  className=" h-14 rounded-xl border bg-transparent w-64"
                  id="bio"
                  name="bio"
                >
                  <option className=" bg-transparent" value="Rect">
                    React
                  </option>
                  <option className=" bg-transparent" value="Laravel">
                    Laravel
                  </option>
                  <option className=" bg-transparent" value="Full stack">
                    Full stack
                  </option>
                  <option className=" bg-transparent" value="Blockchain">
                    Blockchain
                  </option>
                </select> */}
              </div>
            </div>
            {/* <div className="divider" ></div> */}

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputText labelTitle="Language" defaultValue="English" updateFormValue={updateFormValue}/>
                      <InputText labelTitle="Timezone" defaultValue="IST" updateFormValue={updateFormValue}/>
                      <ToogleInput updateType="syncData" labelTitle="Sync Data" defaultValue={true} updateFormValue={updateFormValue}/>
                  </div> */}
          </div>

          <div className="mt-16">
            <button
              className="btn btn-primary float-right w-[500px]"
              onClick={() => updateProfile()}
            >
              Update
            </button>
          </div>
        </div>
      </TitleCard>
    </>
  );
}

export default ProfileSettings;
