import React from "react";
import SearchBar from "../.././../components/Input/SearchBar";
import SelectBox from "../../../components/Input/SelectBoxSmall";
import { Button } from "../../../components/Button";
import { AiOutlineTag, AiOutlineCalendar, AiOutlinePlus } from "react-icons/ai";

const Toolbar = (prop) => {
    return (
        <>
            <div className="flex justify-around items-center flex-col gap-2 sm:flex-row">
                <div>
                    <SearchBar />
                    <Button subject={"Search"} />
                </div>
                <SelectBox class={"text-[15px]"} options={["Latest", "Comment", "favourite", "title"]} />
                <SelectBox class={"text-[15px]"} options={["React", "Express", "Node.js", "MongoDB"]} />
                <button
                    type="button"
                    className="flex px-4 py-2 bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-[20px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                    onClick={prop.onAddClick}
                >
                    <AiOutlinePlus className="text-[30px]" /> New
                </button>
            </div>
        </>
    );
};

export default Toolbar;
