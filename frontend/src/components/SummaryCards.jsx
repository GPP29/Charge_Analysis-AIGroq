function SummaryCards({ summary }) {
  if (!summary) return null;

  // Format the key names to be more readable
  const formatKey = (key) => {
    return key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="summary-section">
      <div className="cards-grid">
        {Object.entries(summary).map(([key, value]) => (
          <div className="summary-card" key={key}>
            <div className="card-title">{formatKey(key)}</div>
            <div className="card-value">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SummaryCards;

// function SummaryCards({ summary }) {
//   return (
//     <div className="cards">
//       {Object.entries(summary).map(([key, value]) => (
//         <div className="card" key={key}>
//           <p className="card-title">
//             {key.replaceAll("_", " ").toUpperCase()}
//           </p>
//           <p className="card-value">{value}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SummaryCards;