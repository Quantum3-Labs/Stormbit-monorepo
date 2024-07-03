"use client";

import { usePathname, useRouter } from "next/navigation";
import ButtonLayout from "~~/components/ButtonLayout/ButtonLayout";
import { userData } from "~~/data/data";
import { useAccount } from "wagmi";
import useUsername from "~~/hooks/gql/useUsername";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const account = useAccount();
  const { username } = useUsername(account.address);

  const handleButtonClick = (route: string) => {
    router.push(`/dashboard/${route}`);
  };

  return (
    <div className="h-full pt-[100px]  flex justify-center ">
      <div className="h-full max-w-[1920px] w-full flex ">
        <div className="min-h-screen max-h-full flex flex-col gap-[14px] text-white pt-[30px]  max-w-[320px] w-full items-center text-2xl bg-[#2D2D2D]">
          <div className="flex flex-col gap-4 my-12">
           {!userData.username && "Login Required"}
            {userData.username && <div className="flex gap-2 justify-center items-center">
              <span className={`${username?'visible':'hidden'} border border-white rounded-full p-2 px-3 text-center text-sm`}> {username?.slice(0,1)}</span>
              <span className="text-xl">{username|| "Please login"}</span>
            </div>}
            <span className="text-[#AD7AF3] font-bold">${userData?.currentBalance || 0.00}</span>
            <span className="text-[#C8C8C8] text-sm">Net Worth</span>
          </div>
          <ButtonLayout active={pathname === "/dashboard"} onClick={() => handleButtonClick("/")}>
            Dashboard
          </ButtonLayout>
          <ButtonLayout active={pathname === "/dashboard/reclaim"} onClick={() => handleButtonClick("reclaim")}>
            Reclaim ®
          </ButtonLayout>
          <ButtonLayout
            active={pathname === "/dashboard/terms"}
            onClick={() => handleButtonClick("terms")}
          >
            Terms
          </ButtonLayout>
          <ButtonLayout
            active={pathname === "/dashboard/loans"}
            onClick={() => handleButtonClick("loans")}
            disabled={true}
          >
            Loans
          </ButtonLayout>
        </div>
        <div className="h-full flex flex-col gap-8 bg-[#252525] w-full text-white">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
