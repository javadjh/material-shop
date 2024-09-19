import { SpaceStyled } from "../../global-style/global.s";
import SwapsComponent from "./Swaps.c";
import { useEffect, useState } from "react";
import { ISwap } from "../../types/swap.type";
import { swapsService } from "../../service/swap.service";

const Swap = () => {
  const [swaps, setSwaps] = useState<{
    total: number | any;
    swaps: Array<ISwap>;
  }>();
  const [paging, setPaging] = useState<{ pageId: number; eachPerPage: number }>(
    {
      pageId: 1,
      eachPerPage: 20,
    }
  );
  useEffect(() => {
    getSwaps();
  }, [paging]);

  const getSwaps = async () => {
    const { data } = await swapsService(paging);

    setSwaps(data.data);
  };
  return (
    <>
      <SpaceStyled horizontal={5}>
        <h4>گزارشات</h4>
      </SpaceStyled>
      <SwapsComponent paging={paging} swaps={swaps} setPaging={setPaging} />
    </>
  );
};
export default Swap;
