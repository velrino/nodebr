export const SiteHomePage = () => {
    return (<>
        <div className="full-image-crop">
            <img src="https://runningmagazine.ca/wp-content/uploads/2020/07/Screen-Shot-2020-07-19-at-4.10.38-PM-1200x675.jpg" alt="Your Image" className="full-image" />
        </div>
        <div className="site-content">
            {
                [...new Array(200)].map((item: any, index: number) => <div>{index} - LINE</div>)
            }
        </div>
    </>)
}