import dynamic from "next/dynamic";
import Head from "next/head";
import config from "../cms/config";

const CMS = dynamic(
    () =>
        import("netlify-cms-app").then((cms) => {
            cms.init({ config });
        }),
    { ssr: false, loading: () => <div>Loading...</div> }
);

const AdminPage = () => {
    return <CMS />;
};

export default AdminPage;
