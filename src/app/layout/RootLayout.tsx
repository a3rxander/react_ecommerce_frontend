import { Outlet } from "react-router";

export default function RootLayout() {
    return ( 

        <div className="">
              <main>
                <Outlet />
            </main>
            </div>
    );
}