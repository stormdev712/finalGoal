import { useDispatch } from "react-redux";
import { useState } from "react";
import Toolbar from "./components/Toolbar";
import ArticleCard from "./components/ArticleCard";
import { useNavigate } from "react-router-dom";
const article = [
    {
        _id: "8shcnqkk2949fjj",
        from: "master",
        avatar: "default.png",
        title: "What is redux?",
        content: "This is aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        createdAt: "2024-5-20",
    },
];
function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const setHandleAddArticle = () => {
        navigate(`/newArticle/${0}`);
    };
    const setHandleAddAnswerArticle = (index) => {
        navigate(`/answer/article/${index}`);
    };
    const onFavouriteClick = () => {
        console.log("Favourite");
    };
    return (
        <>
            <Toolbar onAddClick={setHandleAddArticle} />
            {article.map((v, i) => {
                return (
                    <div key={i}>
                        <ArticleCard
                            title={v.title}
                            avatar={v.avatar}
                            content={v.content}
                            date={v.createdAt}
                            from={v.from}
                            onAnswerClick={() => {
                                setHandleAddAnswerArticle(v._id);
                            }}
                            onFavouriteClick={onFavouriteClick}
                        />
                    </div>
                );
            })}
        </>
    );
}

export default Dashboard;