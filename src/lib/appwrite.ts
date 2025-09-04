import { Client, Databases, ID } from 'appwrite';
import { validateEmail } from './emailValidation';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) // Your Appwrite endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!); // Your project ID from Appwrite console

export const databases = new Databases(client);

export const SubmitEmail = async (email: string) => {
    // Check environment variables
    const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
    const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_WAITLIST_COLLECTION_ID;

    if (!endpoint || !projectId || !databaseId || !collectionId) {
        console.error('Missing Appwrite environment variables:', {
            endpoint: !!endpoint,
            projectId: !!projectId,
            databaseId: !!databaseId,
            collectionId: !!collectionId
        });
        throw new Error('Appwrite configuration is missing. Please check your environment variables.');
    }

    // Server-side validation
    const validation = validateEmail(email);
    if (!validation.isValid) {
        throw new Error(validation.error || 'Invalid email address');
    }

    // Normalize email (trim and lowercase)
    const normalizedEmail = email.trim().toLowerCase();
    
    console.log('Appwrite config:', {
        endpoint,
        projectId,
        databaseId,
        collectionId
    });
    
    try {
        const response = await databases.createDocument(
            databaseId,
            collectionId,
            ID.unique(),
            {
                email: normalizedEmail
            }
        );

        console.log('Email added successfully:', response);
        return response;
    }
    catch (error) {
        console.error('Detailed error adding email:', {
            error,
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        });
        
        // Handle specific Appwrite errors
        if (error instanceof Error) {
            if (error.message.includes('duplicate') || error.message.includes('already exists')) {
                throw new Error('This email is already on our waitlist!');
            }
            if (error.message.includes('permission') || error.message.includes('unauthorized')) {
                throw new Error('Unable to add email. Please check your Appwrite permissions.');
            }
            if (error.message.includes('not found')) {
                throw new Error('Database or collection not found. Please check your Appwrite configuration.');
            }
            if (error.message.includes('network') || error.message.includes('fetch')) {
                throw new Error('Network error. Please check your internet connection and try again.');
            }
        }
        
        throw new Error(`Something went wrong: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
} 