export enum BuildInSrc{
    CMC
}

export  class BISF {

    public static toSymbol(e: BuildInSrc): string {
        if (e == BuildInSrc.CMC) return "CMC";
        throw new Error("Not Support " + e);
    }

}