import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DepositCard from "./components/DepositCard";
import WithdrawalCard from "./components/WithdrawalCard";
import TransactionsCard from "./components/transactions/TransactionsCard";

import SpecularLogo from "../assets/specular-logo.png";

function App() {
  return (
    <div className="p-4 flex justify-center absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <img src={SpecularLogo} alt="specular logo" className="absolute top-4 left-4 h-12" />
      <div className="absolute top-4 right-4">
        <w3m-button />
      </div>
      <Tabs defaultValue="deposit" className="pt-32 w-[600px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
        </TabsList>
        <TabsContent value="deposit">
          <DepositCard />
        </TabsContent>
        <TabsContent value="transactions">
          <TransactionsCard />
        </TabsContent>
        <TabsContent value="withdraw">
          <WithdrawalCard />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
