import { Client, Databases, ID } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) // Your Appwrite endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!); // Your project ID from Appwrite console

export const databases = new Databases(client);

export const SubmitEmail = async (email: string) => {
    
    console.log(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID);
    console.log(process.env.NEXT_PUBLIC_APPWRITE_WAITLIST_TABLE_ID);
    
    
    try {
        const response = await databases.createDocument(
            `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`,
            `${process.env.NEXT_PUBLIC_APPWRITE_WAITLIST_COLLECTION_ID}`,
            ID.unique(),
            {
                email: email
            }
        );

        return response;
    }
    catch (error) {
        console.error('Error adding email:', error);
        throw error;
    }
} 