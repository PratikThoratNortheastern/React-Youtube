export const UserDetails = ({
  name,
  isOnline,
  hideOffline,
  isPremium,
  isNewUser,
  role,
}) => {
  if (hideOffline && !isOnline) {
    return null;
  }
  // Conditional rendering with variables.
  // For complex logic we can store JSX in a variable and use those variables in the code.

  let roleBadge = null;
  if (role === "admin") {
    roleBadge = <span>🔐 Admin</span>;
  } else if (role === "moderator") {
    roleBadge = <span>👮‍♂️ Moderator</span>;
  } else if (role === "vip") {
    roleBadge = <span>💎 VIP</span>;
  }

  // Conditional Rendering with (&&).
  // Use this when you want to return some jsx if true or nothing at all if false.
  // The only issue with this is that if we use this with numbers. if numbers.length = 0, react will render 0
  // For this particular conditional rendering make sure you are being explicit with your values. Booleans are better.
  // These are good for quick toggle or show/hide scenarios
  return (
    <>
      <h2>
        {name}
        {isPremium && <span>🌟</span>}
        {isNewUser && <span>🎉</span>}
        {roleBadge}
      </h2>
      <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
      <p>
        {isOnline ? (
          <button>Send Message</button>
        ) : (
          <small>Check Back Later</small>
        )}
      </p>
    </>
  );

  // Conditional rendering with if statements.
  // if (isOnline) {
  //   return (
  //     <>
  //       <h2>{name}</h2>
  //       <p>🟢 Online</p>
  //       <p>Available for a chat</p>
  //       <button>Send Message</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     <h2>{name}</h2>
  //     <p>🔴 Offline</p>
  //     <p>Not Available for a chat</p>
  //     <small>Check Back Later</small>
  //   </>
  // );
  // Conditional Rendering with Ternary Operators (condition ? true-executes : false or else part executes)
  // return (
  //   <>
  //     <h2>{name}</h2>
  //     <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
  //     <p>
  //       {isOnline ? (
  //         <button>Send Message</button>
  //       ) : (
  //         <small>Check Back Later</small>
  //       )}
  //     </p>
  //   </>
  // );
};
