import { TLoading } from "@customTypes/TLoading";

type LoadingProps={
          loading:TLoading;
          error: null | string;
          children: React.ReactNode
}
const Loading = ({loading, error, children}:LoadingProps) =>{
          if(loading === "pending"){
                    return <p>loading please wait</p>;
          }
          if(loading === "failed"){
                    return <p>{error}</p>;
          }
          return <>{children}</>
}

export default Loading
