import HomeSingeMeshVideo from "./HomeSingleMeshVideo"

const HomeMeshVideos: React.FC = () => {

    return (
        <>
            <div className="firstRow flex">
                <HomeSingeMeshVideo />
                <HomeSingeMeshVideo />
                <HomeSingeMeshVideo />
            </div>
            <div className="secondRow flex">
                <HomeSingeMeshVideo />
                <HomeSingeMeshVideo />
            </div>
            <div className="thirdRow flex">
                <HomeSingeMeshVideo />
                <HomeSingeMeshVideo />
                <HomeSingeMeshVideo />
                <HomeSingeMeshVideo />
            </div>
        </>
    )
}

export default HomeMeshVideos