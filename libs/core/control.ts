/**
* Runtime and event utilities.
*/
//% weight=1 color="#333333" icon="\uf233"
//% advanced=true
namespace control {

    /**
     * Returns the value of a C++ runtime constant
     */
    //% weight=2 weight=19 blockId="control_event_source_id" block="%id" blockGap=8
    //% shim=TD_ID advanced=true
    export function eventSourceId(id: EventBusSource): number {
        return id;
    }
    /**
     * Returns the value of a C++ runtime constant
     */
    //% weight=1 weight=19 blockId="control_event_value_id" block="%id"
    //% shim=TD_ID advanced=true
    export function eventValueId(id: EventBusValue): number {
        return id;
    }

    /**
     * Display specified error code and stop the program.
     */
    //% shim=pxtrt::panic
    export function panic(code: number) { }

    /**
     * If the condition is false, display msg on serial console, and panic with code 098.
     */
    export function assert(condition: boolean, msg?: string) {
        if (!condition) {
            console.log("ASSERTION FAILED")
            if (msg != null) {
                console.log(msg)
            }
            panic(98)
        }
    }

    export function fail(message: string) {
        console.log("Fatal failure: ")
        console.log(message)
        panic(108)
    }

    /**
     * Display warning in the simulator.
     */
    //% shim=pxtrt::runtimeWarning
    export function runtimeWarning(message: string) { }
}

/**
 * Convert any value to a string
 * @param value value to be converted to a string
 */
//% help=text/to-string weight=1
//% block="convert $value=variables_get(myValue) to string"
//% blockId=variable_to_string blockNamespace="text"
function toString(value: any): string {
    return "" + value;
}