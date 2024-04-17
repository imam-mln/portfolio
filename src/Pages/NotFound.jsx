import {Helmet, HelmetProvider} from "react-helmet-async"

export default function NotFound() {
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>404 Not Found</title>
				</Helmet>
			</HelmetProvider>
			<section>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iure eveniet, quos consequuntur ipsa eaque, earum cupiditate nemo sapiente et quis inventore, illum excepturi laudantium? Ipsum eos possimus alias veniam.</p>
			</section>
		</>
	)
}
