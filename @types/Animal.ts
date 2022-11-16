import {NextRequest} from "next/server";

type Animal = {
	name: string;
	request: NextRequest;
}

export default Animal;