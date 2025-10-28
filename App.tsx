import React from 'react';
import { useAudioTranscription } from './hooks/useAudioTranscription';
import Header from './components/Header';
import TranscriptionDisplay from './components/TranscriptionDisplay';
import Controls from './components/Controls';
import ErrorDisplay from './components/ErrorDisplay';

export default function App() {
  const {
    isRecording,
    currentTranscript,
    transcriptHistory,
    error,
    startTranscription,
    stopTranscription,
    transcribeAudioFile,
  } = useAudioTranscription();

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col font-sans antialiased">
      <Header />
      <main className="flex-grow flex flex-col p-4 md:p-8 space-y-4 max-w-4xl mx-auto w-full">
        <TranscriptionDisplay
          history={transcriptHistory}
          current={currentTranscript}
          isRecording={isRecording}
        />
        <ErrorDisplay error={error} />
      </main>
      <footer className="sticky bottom-0 bg-gray-900/80 backdrop-blur-sm p-4 border-t border-gray-700">
        <Controls
          isRecording={isRecording}
          onStart={startTranscription}
          onStop={stopTranscription}
          onFileUpload={transcribeAudioFile}
        />
      </footer>
    </div>
  );
}