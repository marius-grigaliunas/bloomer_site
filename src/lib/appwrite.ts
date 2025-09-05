import { Client, Databases, ID } from 'appwrite';
import { validateEmail } from './emailValidation';

const config = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
    waitlistCollectionId: process.env.NEXT_PUBLIC_APPWRITE_WAITLIST_COLLECTION_ID,
    userMessagesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USER_MESSAGES_ID
}

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) 
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const databases = new Databases(client);

export const SubmitEmail = async (email: string) => {

    if (!config.endpoint || !config.projectId || !config.databaseId || !config.waitlistCollectionId) {
        console.error('Missing Appwrite environment variables:', {
            endpoint: !!config.endpoint,
            projectId: !!config.projectId,
            databaseId: !!config.databaseId,
            collectionId: !!config.waitlistCollectionId
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

    
    try {
        const response = await databases.createDocument(
            config.databaseId,
            config.waitlistCollectionId,
            ID.unique(),
            {
                email: normalizedEmail
            }
        );

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

export const SubmitUserMessage = async (message: string, email: string) => {
    if (!config.endpoint || !config.projectId || !config.databaseId || !config.userMessagesCollectionId) {
        console.error('Missing Appwrite environment variables:', {
            endpoint: !!config.endpoint,
            projectId: !!config.projectId,
            databaseId: !!config.databaseId,
            collectionId: !!config.userMessagesCollectionId
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

    try {
        const response = await databases.createDocument(
            config.databaseId,
            config.userMessagesCollectionId,
            ID.unique(),
            {
                email: email,
                message: message
            }
        );

        return response;
    } catch (error) {
        console.error('Detailed error adding user message:', {
            error,
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        });

        throw new Error(`Something went wrong: ${error instanceof Error ? error.message : 'Unknown error'}`);
     }
}