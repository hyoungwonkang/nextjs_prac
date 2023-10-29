const { default: Link } = require("next/link");

function UserCard(props) {
  return (
    <Link href={`/user/${props.username}`} passHref>
      <div
        className="
                dark:bg-gray-800 bg-gray-100 cursor-pointer
                dark:text-white p-4 rounded-md text-center
                shadow-xl"
      >
        <img
          src={props.avatar}
          alt={props.username}
          className="w-16 bg-gray-400 rounded-full m-auto"
        />
      </div>
    </Link>
  );
}

export default UserCard;
