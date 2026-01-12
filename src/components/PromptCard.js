import { useState } from "react";

export default function PromptCard({ title, content, onDelete }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>

      <pre style={styles.content}>
        {content}
      </pre>

      <div style={styles.actions}>
        <button onClick={handleCopy} style={styles.button}>
          {copied ? "✅ Copié" : "📋 Copier"}
        </button>

        <button onClick={onDelete} style={{ ...styles.button, ...styles.delete }}>
          ❌ Supprimer
        </button>
      </div>
    </div>
  );
}
