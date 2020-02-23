export enum RecordType {
    BtcQuote
}

export class RTF {

    public static toSymbol(e: RecordType): string {
        if (e === RecordType.BtcQuote) "BtcQuote";
        throw new Error("Not Support " + e);
    }

}