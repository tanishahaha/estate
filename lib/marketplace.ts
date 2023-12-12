import { BasicMarketplace } from "@meshsdk/contracts";
import { KoiosProvider } from "@meshsdk/core";

export async function getMarketplace(wallet) {
  const koiosProvider = new KoiosProvider("preprod");
await koiosProvider.fetchAddressUTxOs(
    'addr_test1qzxr3snxuhgveufp7cm200j58ps8l76278nc72avnghxz43juxha4gjtm34jhauhre4x73p6hczly79nnlmm2lfhj4kq3w2mhz',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyIjoic3Rha2UxdXlld3J0NzY1ZjlhYzZldDc3dDN1Nm4wZ3NhdHVwMGowemVlbGFhNDA1bWUybXFkd242cDMiLCJleHAiOjE3MzM3NjUwMTIsInRpZXIiOjEsInByb2pJRCI6ImthcmJvbi1sZWRnZXIifQ.q7WCgWbNV1MTgPj7BWcMllqHUAWPz-HV3uLQjN8cc20',
  )



  const marketplace = new BasicMarketplace({
    fetcher: koiosProvider,
    initiator: wallet,
    network: "preprod",
    signer: wallet,
    submitter: koiosProvider,
    percentage: 25000, // 2.5%
    owner: "addr_test1qzxr3snxuhgveufp7cm200j58ps8l76278nc72avnghxz43juxha4gjtm34jhauhre4x73p6hczly79nnlmm2lfhj4kq3w2mhz",
  });

  return marketplace;
}
