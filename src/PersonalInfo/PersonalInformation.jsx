import { useForm } from "antd/es/form/Form.js";
import {Button, Form, Input, Space} from "antd";
import Radio from "antd/es/radio/index.js";
import DatePickerWrapper from "../Config/DatePicker/DatePickerConfig.jsx";
import Image from "../assets/Images/Logo.png";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import DateRangePickerWrapper from "../Config/DatePicker/DateRangePickerConfig.jsx";

const PersonalInformation = () => {
    const rules = {
        surname: [{ required: true, message: "Required Field" }],
        firstName: [{ required: true, message: "Required Field" }],
        middleName: [{ required: true, message: "Required Field" }],
        gender: [{ required: true, message: "Required Field" }],
        email: [
            { required: true, message: "Required Field" },
            { type: "email", message: "Enter a valid email" },
        ],
        date: [{ required: true, message: "Required Field" }],
        homePhone: [{ required: true, message: "Required Field" }],
        mobilePhone: [
            { required: true, message: "Required Field" },
            {
                pattern: /^(?:254|\+254|0)?((?:(?:7(?:(?:[01249][0-9])|(?:5[789])|(?:6[89])))|(?:1(?:[1][0-5])))[0-9]{6})$/,
                message: "Enter a valid phone number",
            },
        ],
        address: [{ required: true, message: "Required Field" }],
        nationality: [{ required: true, message: "Required Field" }],
        IdNumber: [{ required: true, message: "Required Field" }],
    };

    const [form] = useForm();

    const onFormFinish = (values) => {
        console.log(values);
        // todo handle form finish
    };

    const onFormFinishFailed = (errorInfo) => {
        console.log(errorInfo);

        // todo handle form finish fail
    };

    const handleDateChange = (value) => {
        form.setFieldsValue({ date: value });
    };

    const handleDateAwardedChange = (value) => {
        form.setFieldsValue({ dateAwarded: value });
    };




    const handleDateRangeChange = (value) => {
        // Update the form field when the date range changes
        form.setFieldsValue({ dateRange: value });
    };

    const containerStyle = {
        background: `url(${Image})`,
        backgroundSize: "contain", // Adjust to your needs
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: 0.95, // Adjust the opacity level (0.0 to 1.0)
        height: "100vh", // Set the desired height
        position: "relative",
    };

    const contentStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Add a white background to make text readable
    };

    // Define the custom validation message style
    const validationMessageStyle = {
        textAlign: "left", // Align the error message to the left
        color: "red", // Change the text color to red (or your desired color)
        // Add any additional styles you need
    };

    return (
        <div style={containerStyle}>
            <div className={"container centerAlign"} style={contentStyle}>
                <div className={"w-3/4"}>
                    <h2 className={"text-xl font-semibold font-serif text-gray-800 "}>
                        COURSE APPLICATION FORM
                    </h2>
                    <div style={{ display: "flex", alignItems: "start" }}>
                        <label className={"text-md font-semibold font-serif text-gray-800"}>
                            {" "}
                            PERSONAL INFORMATION
                        </label>
                    </div>

                    <Form
                        form={form}
                        name="basic"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={onFormFinish}
                        onFinishFailed={onFormFinishFailed}
                    >
                        <div className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"}>
                            <Form.Item
                                label="Surname"
                                name="surname"
                                rules={rules.surname}
                                // Apply the custom validation message style
                                style={validationMessageStyle}
                            >
                                <Input size={"large"} className="border border-gray-700 border-opacity-100" />
                            </Form.Item>
                            <Form.Item
                                label="First Name"
                                name="firstName"
                                rules={rules.firstName}
                                // Apply the custom validation message style
                                style={validationMessageStyle}
                            >
                                <Input size={"large"} className="border border-gray-700 border-opacity-100" />
                            </Form.Item>
                            <Form.Item
                                label="Middle Name"
                                name="middleName"
                                rules={rules.middleName}
                                // Apply the custom validation message style
                                style={validationMessageStyle}
                            >
                                <Input size={"large"} className="border border-gray-700 border-opacity-100" />
                            </Form.Item>
                        </div>

                        <div>
                            <Form.Item
                                label="Gender"
                                name="gender"
                                rules={rules.gender}
                                // Apply the custom validation message style
                                style={validationMessageStyle}
                            >
                                <Radio.Group style={{fontsize:"1.5rem"}}>
                                    <Radio value="Mr."> Mr. </Radio>
                                    <Radio value="Mrs."> Mrs. </Radio>
                                    <Radio value="Ms."> Ms. </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>

                        <div className={"grid sm:grid-cols-1 md:grid-cols-3 gap-5"}>
                            <Form.Item
                                className={"md:col-span-2"}
                                label="Email"
                                name="email"
                                rules={rules.email}
                                // Apply the custom validation message style
                                style={validationMessageStyle}
                            >
                                <Input size={"large"} className="border border-gray-700 border-opacity-100" />
                            </Form.Item>
                            <Form.Item
                                className={"md:col-span-1"}
                                rules={rules.date}
                                label="Date"
                                name="date"
                                style={validationMessageStyle}
                            >
                                <DatePickerWrapper
                                    size={"large"}
                                    className={"w-full border border-gray-700 border-opacity-100"}
                                    value={form.getFieldValue("date")}
                                    onChange={handleDateChange}
                                />
                            </Form.Item>

                        </div>

                        <div className={"grid grid-cols-1"}>
                            <div style={{ display: "flex", justifyItems: "start" }}>
                                <label>Phone Numbers</label>
                            </div>
                            <div className={"grid md:grid-cols-3 gap-5"}>
                                <Form.Item
                                    label="Home"
                                    name="homePhone"
                                    rules={rules.homePhone}
                                    // Apply the custom validation message style
                                    style={validationMessageStyle}
                                >
                                    <Input size={"large"} className="border border-gray-700 border-opacity-100" />
                                </Form.Item>
                                <Form.Item
                                    label="Work"
                                    name="workMobile"
                                    // Apply the custom validation message style
                                    style={validationMessageStyle}
                                >
                                    <Input size={"large"} className="border border-gray-700 border-opacity-100" />
                                </Form.Item>
                                <Form.Item
                                    label="Mobile"
                                    name="mobilePhone"
                                    rules={rules.mobilePhone}
                                    // Apply the custom validation message style
                                    style={validationMessageStyle}
                                >
                                    <Input size={"large"} className="border border-gray-700 border-opacity-100" />
                                </Form.Item>
                            </div>
                        </div>
                        <Form.Item label="Address" name="address" rules={rules.address} style={validationMessageStyle}>
                            <Input size={"large"} className="border border-gray-700 border-opacity-100" />
                        </Form.Item>
                        <Form.Item label="Nationality" name="nationality" rules={rules.nationality} style={validationMessageStyle}>
                            <Input size={"large"} className="border border-gray-700 border-opacity-100" />
                        </Form.Item>
                        <Form.Item label="Passport/National ID Number:" name="IdNumber" rules={rules.IdNumber} style={validationMessageStyle}>
                            <Input size={"large"} className="border border-gray-700 border-opacity-100" />
                        </Form.Item>
                        <div style={{ display: "flex", alignItems: "start" }}>
                            <label className={"text-md font-semibold font-serif text-gray-800 py-5"}>
                                {" "}
                                2:    EDUCATIONAL RECORD TO DATE (list your top qualifications)
                            </label>
                        </div>
                        <div>
                            <Form.List name="users">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <Space
                                                key={key}
                                                align="baseline"
                                                className={'grid grid-cols-1'}
                                            >
                                                <div className={'grid sm:grid-cols-1 lg:grid-cols-6 gap-5'}>
                                                    <Form.Item
                                                        style={validationMessageStyle}
                                                        className={"md:col-span-2"}
                                                        label={"Institution"}
                                                        {...restField}
                                                        name={[name, 'institution']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Required Field',
                                                            },
                                                        ]}
                                                    >
                                                        <Input size={"large"} className="border border-gray-700 border-opacity-100" />
                                                    </Form.Item>


                                                    <Form.Item
                                                        style={validationMessageStyle}
                                                        label={"Dates"}
                                                        className={"md:col-span-2"}
                                                        {...restField}
                                                        name={[name, 'dates']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Required Field',
                                                            },
                                                        ]}
                                                    >
                                                        <DateRangePickerWrapper
                                                            className={"w-full border border-gray-700 border-opacity-100"}
                                                            size={"large"}
                                                            value={form.getFieldValue('dates')}
                                                            onChange={handleDateRangeChange} // Handle date range change
                                                        />
                                                    </Form.Item>
                                                    <Form.Item
                                                        style={validationMessageStyle}
                                                    label={"Award"}
                                                    className={"md:col-span-2"}
                                                    {...restField}
                                                    name={[name, 'Award']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Required Field',
                                                        },
                                                    ]}
                                                >
                                                        <Input size={"large"} className="border border-gray-700 border-opacity-100" />
                                                </Form.Item>
                                                    <Form.Item
                                                        label={"Date Awarded"}
                                                        style={validationMessageStyle}
                                                        className={"md:col-span-2"}
                                                        {...restField}
                                                        name={[name, 'dateAwarded']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Required Field',
                                                            },
                                                        ]}
                                                    >
                                                        <DatePickerWrapper
                                                            size={"large"}
                                                            className={"w-full border border-gray-700 border-opacity-100"}
                                                            value={form.getFieldValue(["dateAwarded"])} // Change the field name here
                                                            onChange={handleDateAwardedChange}
                                                        />
                                                    </Form.Item>

                                                    <MinusCircleOutlined onClick={() => remove(name)} />

                                                </div>

                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add qualifications
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </div>
                        <Form.Item>
                            <button className={"bg-blue-900 text-white w-1/4 h-10 rounded-2xl text-lg hover:bg-blue-950"} type="submit">
                                Submit
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default PersonalInformation;
