The solution involves adding error handling and validation to the component associated with the dynamic route. Check if the `userId` parameter is defined before using it.  If it's not defined, display an appropriate message or fallback UI. You can also add validation to ensure the parameter is of the correct type.

```javascript
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams();

  if (!userId) {
    return <p>Please select a user.</p>;
  }

  // ... rest of your component logic
  //  Add type validation here if needed (e.g., ensuring userId is a number)
  return (
    <div>
      <h1>User Details for ID: {userId}</h1>
      {/* ... rest of the component JSX ... */}
    </div>
  );
}

```
By adding this check, you prevent runtime errors when navigating to the `/users` route without a specific userId.