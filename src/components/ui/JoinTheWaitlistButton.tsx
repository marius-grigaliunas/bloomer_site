export default function JoinTheWaitlistButton() {
    return (
        <button
            onClick={() => document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#48bb78] hover:bg-[#38a169] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
            Install the app on android devices!
        </button>
    );
}