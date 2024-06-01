import Image from "next/image"

export const Agency = () => {

    return (
        <div>
            <h1>Managed agency selection</h1>
            <h3>strengthen your onboarding process</h3>
            <div className="agency-container">
                <article>
                    <Image src="/img/video.png" width={300} height={500} />
                </article>
                <article>

                    <div>
                        <div>
                        Icon Here
                        </div>

                        <div>
                        <h4>Brief</h4>
                        <p>Complete brief writing or simple guidance on what to include,we've got you covered.</p>
                        </div>

                    </div>

                    <div>
                        <div>
                        Icon Here
                        </div>

                        <div>
                        <h4>Search</h4>
                        <p>In-depth agency search covering;criteria-matching,door knocking and due-dilligence vetting.</p>
                        </div>

                    </div>

                    <div>
                        <div>
                        Icon Here
                        </div>

                        <div>
                        <h4>Pitch</h4>
                        <p>Comprehensive pitch management,including comms,diary management and pitch hosting.</p>
                        </div>

                    </div>

                </article>
            </div>
        </div>
    )
}