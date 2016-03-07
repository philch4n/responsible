
export function UserImage({ userImage, imageType }) {
	return (
		<div className="userImage">
		{
			imageType === 'profile' ?
				<img src={ userImage /*  portrait size */ } /> :
				<img src={ userImage /*  icon size  */ } />
		}
		</div>
	);
};
